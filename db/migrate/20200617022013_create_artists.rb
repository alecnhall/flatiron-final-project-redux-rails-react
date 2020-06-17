class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :img
      t.string :source_link
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
