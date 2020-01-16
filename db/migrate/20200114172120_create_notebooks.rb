class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.integer :user_id, null: false, unique: true
      t.string :title, null: false, unique: true
      t.timestamps
    end
    add_index :notebooks, :user_id
    add_index :notebooks, :title
  end
end
