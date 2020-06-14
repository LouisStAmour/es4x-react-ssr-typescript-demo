import { TestSuite } from '@vertx/unit';

const suite = TestSuite.create("The basics");

suite.test("It works!", (context) => {
    const s = "value";
    context.assertEquals("value", s);
});

suite.run();