class TodosReflex < StimulusReflex::Reflex
  def create(options: {})
    Todo.create session_id: session.id, title: options[:value]
  end

  def edit(options: {})
    @edit_id = options.dataset[:id].to_i
  end

  def update(options: {})
    Todo.find_by(session_id: session.id, id: options.dataset[:id])&.update title: options[:value]
  end

  def toggle(options: {})
    Todo.find_by(session_id: session.id, id: options.dataset[:id])&.toggle! :completed
  end

  def destroy(options: {})
    Todo.find_by(session_id: session.id, id: options.dataset[:id])&.destroy
  end

  def toggle_all
    todos = Todo.where(session_id: session.id)
    todos.update_all completed: todos.active.exists?
  end

  def destroy_completed
    Todo.where(session_id: session.id, completed: true).destroy_all
  end

  def filter(options: {})
    session[:filter] = options.dataset[:filter]
  end
end
