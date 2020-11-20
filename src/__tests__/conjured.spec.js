import { Shop, Item } from '../gilded-rose';

let conjured = 'Conjured Mana Cake'

describe('Conjured Item', function () {

    it('reduces quality value by 2', function () {
        const gildedRose = new Shop([new Item(conjured, 3, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });
});