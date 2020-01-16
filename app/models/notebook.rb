class Notebook < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true

    belongs_to :user
    has_many :notes, dependent: :destroy
end
