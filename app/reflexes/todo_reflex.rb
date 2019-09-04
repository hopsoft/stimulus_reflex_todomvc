class TodoReflex < StimulusReflex::Reflex
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

  def destroy(id)
    Todo.find_by(session_id: session.id, id: id)&.destroy
  end
end
