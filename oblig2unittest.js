
//unittest

QUnit.test("Select bar", function (assert) {
    selectBar('3');
    assert.equal(chosenBar, '3');
    reset()
});

QUnit.test("none selected", function (assert) {
    selectBar('1');
    selectBar('1');
    assert.equal(chosenBar, 'none');
    reset()
});

QUnit.test("New bar id", function (assert) {
    selectBar('1')
    selectBar('4');
    assert.equal(chosenBar, '4');
    reset()
});

QUnit.test("Bar selected deleted", function (assert) {
    selectBar('3')
    deleteBar()
    assert.equal(numbers.length, 4);
    reset()
});

QUnit.test("Change bar", function (assert) {
    selectBar('3')
    inputValue = 6;
    changeBar()
    assert.equal(numbers[2], 6);
    reset()
});

QUnit.test("Add new bar", function (assert) {
    inputValue = 6;
    addBar()
    assert.equal(numbers.length, 6);
    reset()
});