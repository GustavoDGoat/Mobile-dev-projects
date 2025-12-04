import { query, mutation } from "./_generated/server";
import {ConvexError, v} from "convex/values"

export const getTodos = query({
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").collect();
        return todos;
    },
})


export const addTodo = mutation({
    args: {text: v.string()},
    handler: async (ctx, {text}) => {
        const todoId = await ctx.db.insert("todos",{
            text: text,
            isCompleted: false,
        });
        return todoId;
},              
})

export const toggleTodo = mutation({
    args:{Id: v.id("todos")},
    handler:async (ctx, {Id})=>{
        const todo = await ctx.db.get(Id);
        if (!todo) {
            throw new ConvexError("Todo not found");
        }
        await ctx.db.patch(Id, {
            isCompleted: !todo.isCompleted,
        });
    },

})

export const deleteTodo = mutation({
    args:{Id: v.id("todos")},
    handler:async (ctx, {Id})=>{
        await ctx.db.delete(Id);
    },
});

export const updateTodo= mutation({
    args:{
        Id: v.id("todos"),
        text: v.string(),
    },
    handler:async (ctx, args)=>{
        await ctx.db.patch(args.Id, {
            text: args.text
        });
    },
});


export const clearAllTodos= mutation({
    handler: async (ctx)=>{
        const todos= await ctx.db.query("todos").collect();
        //delete all todos
        for(const todo of todos){
            await ctx.db.delete(todo._id);

        }
        return {deletedCount: todos.length};

    },
});