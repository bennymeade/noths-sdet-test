import { Shop, Item } from '../gilded-rose';

let pass = 'Backstage passes to a TAFKAL80ETC concert'

describe('Back Stage Pass', function () {

    it('increases quality value to a maximum of 50', function () {
        const gildedRose = new Shop([new Item(pass, 11, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it('increases quality value by 1 as sellIn value is greater than 10', function () {
        const gildedRose = new Shop([new Item(pass, 11, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(21);
    });

    it('increases quality value by 2 as sellIn value is 10 or less', function () {
        const gildedRose = new Shop([new Item(pass, 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(22);
    });

    it('increases quality value by 3 as sellIn value is 5 or less', function () {
        const gildedRose = new Shop([new Item(pass, 5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(23);
    });


    it('sets quality value to 0 as sellIn value is 0', function () {
        const gildedRose = new Shop([new Item(pass, 0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it('sets quality value to 0 as sellIn value is less than 0', function () {
        const gildedRose = new Shop([new Item(pass, -1, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});