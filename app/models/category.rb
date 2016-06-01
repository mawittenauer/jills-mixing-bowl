class Category < ActiveRecord::Base
  has_many :cakes
  validates_presence_of :name
end
