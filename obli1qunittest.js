QUnit.test( "Gyldig dato", function( assert ) {
    const isValid = isDateValid('03.02.2020');
    assert.equal(isValid, true);
  });
  
  QUnit.test("Det er ikke punktum i begge de rette posisjonene", function (assert) {
    const isValid = isDateValid('0310212020');
    assert.equal(isValid, false);
  });
  
  QUnit.test("Feil måned", function (assert) {
    const isValid = isDateValid('01.13.2020');
    assert.equal(isValid, false);
  });
  
  QUnit.test("Måned ikke siffer", function (assert) {
    const isValid = isDateValid('01.fk.2020');
    assert.equal(isValid, false);
  });
  
  QUnit.test("Feil dag", function (assert) {
    const isValid = isDateValid('40.01.2020');
    assert.equal(isValid, false);
  });
  
  QUnit.test("skuddår", function (assert) {
    const isValid = isDateValid('29.02.2020');
    assert.equal(isValid, true);
  });
  
  QUnit.test("dag 31 for måned uten", function (assert) {
    const isValid = isDateValid('31.06.2021');
    assert.equal(isValid, false);
  });
  
  QUnit.test("dag 30 for februar", function (assert) {
    const isValid = isDateValid('30.02.2021');
    assert.equal(isValid, false);
  });
  
  QUnit.test("dag 29 for februar og ikke skuddår", function (assert) {
    const isValid = isDateValid('29.02.2021');
    assert.equal(isValid, false);
  });
  
  QUnit.test("År lenger en 4 siffer", function (assert) {
    const isValid = isDateValid('29.02.20200');
    assert.equal(isValid, false);
  });
  
  QUnit.test("År er ikke 4 siffer", function (assert) {
    const isValid = isDateValid('29.02.fret');
    assert.equal(isValid, false);
  });
  
  QUnit.test("Gyldig dato 30.06", function (assert) {
    const isValid = isDateValid('30.06.2020');
    assert.equal(isValid, true);
  });