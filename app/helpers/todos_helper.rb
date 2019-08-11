module TodosHelper
  def editing?(todo)
    todo.id == @edit_id
  end
end
