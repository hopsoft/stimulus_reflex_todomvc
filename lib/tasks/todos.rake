namespace :todos do
  desc "Remove task with more than 2 weeks"
  task remove: :environment do
    Todo.where("created_at <= ?", 2.weeks.ago).destroy_all
  end
end
