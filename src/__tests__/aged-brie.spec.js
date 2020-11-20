import { Shop, Item } from '../gilded-rose';

describe("Aged Brie", function () {

    it('increases quality value by 1', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
    });

    it('increases quality value to a maximum of 50', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 3, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it('increases quality by 2 as sellIn value is 0 or less', function () {
        const gildedRose = new Shop([new Item('Aged Brie', 0, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    });

    it('increases quality by 2 as sellIn value is less than 0', function () {
        const gildedRose = new Shop([new Item('Aged Brie', -1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    });
});