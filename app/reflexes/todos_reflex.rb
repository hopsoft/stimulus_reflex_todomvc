class TodosReflex < StimulusReflex::Reflex
  def filter(name)
    session[:filter] = name
  end

  def create(title)
    Todo.create session_id: session.id, title: title
  end

  def edit(id)
    @edit_id = id.to_i
  end

  def cancel_edit
    @edit_id = nil
  end

  def update(id, title)
    Todo.find_by(session_id: session.id, id: id)&.update title: title
  end

  def toggle(id)
    Todo.find_by(session_id: session.id, id: id)&.toggle! :completed
  end

  def toggle_all
    todos = Todo.where(session_id: session.id)
    todos.update_all completed: todos.active.exists?
  end

  def destroy(id)
    Todo.find_by(session_id: session.id, id: id)&.destroy
  end

  def destroy_completed
    Todo.where(session_id: session.id, completed: true).destroy_all
  end
end
