class AddDateToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :api_events, :date, :datetime
  end
end
