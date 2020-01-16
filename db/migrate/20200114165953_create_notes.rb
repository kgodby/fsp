class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :notebook_id, null: false, default: 1
      t.string  :title
      t.text  :body
      t.boolean :trash, default: false
      t.timestamps
    end
    add_index :notes, :notebook_id, unique: true
  end
end
