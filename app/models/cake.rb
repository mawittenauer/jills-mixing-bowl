class Cake < ActiveRecord::Base
  mount_uploader :cake, CakeUploader
end
