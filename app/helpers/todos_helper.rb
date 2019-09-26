module TodosHelper
  def header_html
    "#{tag.small session[:filter]} todos".html_safe
  end

  def filter_css(filter)
    "selected" if session[:filter] == filter.to_s
  end
end
