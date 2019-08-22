class TodosController < ApplicationController
  def index
    session[:filter] ||= "all"
    @all_todos = Todo.where(session_id: session.id)
    @filtered_todos = @all_todos.send(session[:filter]).order(:created_at)
  end
end
