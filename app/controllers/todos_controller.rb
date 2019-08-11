class TodosController < ApplicationController
  def index
    @filter ||= session[:filter] || "all"
    @all_todos = Todo.where(session_id: session.id)
    @filtered_todos = @all_todos.send(@filter).order(created_at: :desc)
  end
end
