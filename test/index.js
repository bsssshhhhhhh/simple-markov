import assert from 'assert';
import SimpleMarkov from '../lib';

// Input text stolen from GitHub's privacy policy

describe('simple-markov', function () {
  it('should generate text', function () {
    var input = 'Thanks for entrusting GitHub with your source code, your projects, and your personal information. Holding onto your private information is a serious responsibility, and we want you to know how we\'re handling it.';
    var markov = new SimpleMarkov(4, input);
    var text = markov.generateText(100);
    assert(text !== '');
  });

  it('should generate the expected length text', function () {
    var input = 'We collect your information only with your consent; we only collect the minimum amount of personal information that is necessary to fulfill the purpose of your interaction with us; we don\'t sell it to third parties; and we only use it as this Privacy Statement describes.';
    var markov = new SimpleMarkov(4, input);
    var EXPECTED_LENGTH = 400;

    var text = markov.generateText(EXPECTED_LENGTH);
    assert(text.length === EXPECTED_LENGTH, text.length);
  });

  it('should not generate the same text it is given', function () {
    var input = 'If you\'re just browsing the website, we collect the same basic information that most websites collect. We use common internet technologies, such as cookies and web server logs.';
    var markov = new SimpleMarkov(4, input);
    var text = markov.generateText(input.length);
    assert(text !== input);
  });
});
