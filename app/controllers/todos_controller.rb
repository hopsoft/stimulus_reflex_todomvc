class TodosController < ApplicationController
  def index
    @filter ||= "all"
    @todos = Todo.where(session_id: session.id).send(@filter).order(created_at: :desc)
    @completed_count = Todo.where(session_id: session.id).completed.count
    @active_count = Todo.where(session_id: session.id).active.count
  end
end
