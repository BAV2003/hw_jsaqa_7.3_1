const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names should be no sorting", () => {
    const books = [
      "Трудно быть богом",
      "Пикник на обочине",
      "Трудно быть богом",
    ];
    const expected = [
      "Пикник на обочине",
      "Трудно быть богом",
      "Трудно быть богом",
    ];

    expect(sorting.sortByName(books)).toEqual(expected);
  });
});
