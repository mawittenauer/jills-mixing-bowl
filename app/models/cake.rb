class Cake < ActiveRecord::Base
  belongs_to :category
  mount_uploader :cake, CakeUploader
  validates_presence_of :cake
end
