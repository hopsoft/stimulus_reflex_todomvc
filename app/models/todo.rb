# == Schema Information
#
# Table name: todos
#
#  id         :bigint           not null, primary key
#  session_id :string           not null
#  title      :string           not null
#  completed  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord
  validates :session_id, presence: true
  validates :title, presence: true

  scope :completed, -> { where completed: true }
  scope :active, -> { where completed: false }

  def active?
    !completed?
  end
end
