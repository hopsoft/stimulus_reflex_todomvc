namespace :todos do
  desc "Remove task with more than 2 weeks"
  task remove: :environment do
    Todo.older_than_two_weeks.destroy_all
  end
end
