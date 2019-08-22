class FilterReflex < StimulusReflex::Reflex
  def apply(filter)
    session[:filter] = filter
  end
end
