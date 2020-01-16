class Note < ApplicationRecord
    validates :notebook_id, presence: true, uniqueness: true

    belongs_to :notebook
    has_one :user, through: :notebook
end
