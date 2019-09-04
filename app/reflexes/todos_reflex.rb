class TodosReflex < StimulusReflex::Reflex
  def toggle_all
    todos = Todo.where(session_id: session.id)
    todos.update_all completed: todos.active.exists?
  end

  def destroy_completed
    Todo.where(session_id: session.id, completed: true).destroy_all
  end
end
