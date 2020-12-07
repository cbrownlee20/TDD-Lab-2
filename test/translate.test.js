

describe('translate', function () {
    // Tests go in here. First example below
    it("word starting with a", function() {
        expect(translate('apple')).toEqual('appleway')
    });

    it("words that start with vowels", function() {
        expect(translate('easter')).toEqual('easterway')
    });

    it("words that start with vowels", function() {
        expect(translate('igloo')).toEqual('iglooway')
    });

    it("words that start with vowels", function() {
        expect(translate('orange')).toEqual('orangeway')
    });

    // words that start with vowels with capital letters are converted to lowercase
    
    it("convert words with capital letters to lowercase", function() {
        expect(translate('Atom')).toEqual('atomway')
    });
    
    it("convert words with capital letters to lowercase", function() {
        expect(translate('cat')).toEqual('atcay')
    });

    // words that start with one consonant.. write tests for the second letter
    // several different vowels

    it("words that start with one consonant", function() {
        expect(translate('cot')).toEqual('otcay')
    });

    // words that start with two consonants

    it("words that start with two consonant", function() {
        expect(translate('start')).toEqual('artstay')
    });

    // words that start with more consonants

    it("words that start with more consonant", function() {
        expect(translate('strain')).toEqual('ainstray')
    });

    // Multiple tests for words starting with different vowels.
    // a. These tests are correct and pass.
    // 2. At least one test for words starting with one consonant.
    // a. These tests are correct and pass.
    // 3. At least one test for words starting with two consonants.
    // a. These tests are correct and pass.
    // 4. At least one test for words starting with three consonants.
    // a. These tests are correct and pass.
    // 5. At least one test checking for lower case conversion.
    // a. These tests are correct and pass.
    });

