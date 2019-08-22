module TodosHelper
  def filter_css(filter)
    session[:filter] ||= "all"
    filter.to_s == session[:filter] ? "selected" : nil
  end
end
