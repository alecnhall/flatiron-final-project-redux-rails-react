class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :source_link
      t.string :img
      t.string :release_date
      t.references :artists, null: false, foreign_key: true

      t.timestamps
    end
  end
end
