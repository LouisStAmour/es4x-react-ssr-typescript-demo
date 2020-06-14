Rename `.env.sample` to `.env` and update it to point at your GraalVM JVM path.

I prefer Yarn, so I used `yarn` instead of `npm install`.

The `tsc` for this repo passes if I use:

```typescript
export interface AsyncResult<T> extends PromiseLike<T> {
  succeeded() : boolean;
  failed() : boolean;
  cause() : Throwable | null;
  result() : T | null;
}
```

in node_modules/@vertx/core/index.d.ts

However, running `yarn start` fails with:

```log
ModuleError: Module "stream" was not found
        at <js> Require.resolve(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:165:5324-5402)
        at <js> Require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:132:4365-4391)
        at <js> this.require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:46:1459-1475)
        at <js> :anonymous(node_modules/react-dom/cjs/react-dom-server.node.development.js:21:554-570)
        at <js> :anonymous(node_modules/react-dom/cjs/react-dom-server.node.development.js:15-4084:383-130146)
        at <js> _load(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:97:3264-3345)
        at <js> Require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:141:4628-4652)
        at <js> this.require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:46:1459-1475)
        at <js> :anonymous(node_modules/react-dom/server.node.js:6:227-279)
        at <js> _load(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:97:3264-3345)
        at <js> Require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:141:4628-4652)
        at <js> this.require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:46:1459-1475)
        at <js> :anonymous(node_modules/react-dom/server.js:3:94-117)
        at <js> _load(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:97:3264-3345)
        at <js> Require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:141:4628-4652)
        at <js> this.require(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:46:1459-1475)
        at <js> :anonymous(out/index.js:6:258-284)
        at <js> _load(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:97:3264-3345)
        at <js> runMain(file:node_modules/.lib/es4x-0.12.0.jar!/io/reactiverse/es4x/jvm-npm.js:110:3648-3692)
        at org.graalvm.sdk/org.graalvm.polyglot.Value.invokeMember(Value.java:549)
        at io.reactiverse.es4x.impl.JSVerticleFactory$1.start(JSVerticleFactory.java:81)
        at io.vertx.core.Verticle.start(Verticle.java:66)
        at io.vertx.core.impl.DeploymentManager.lambda$doDeploy$9(DeploymentManager.java:556)
        at io.vertx.core.impl.ContextImpl.executeTask(ContextImpl.java:366)
        at io.vertx.core.impl.EventLoopContext.lambda$executeAsync$0(EventLoopContext.java:38)
        at io.netty.util.concurrent.AbstractEventExecutor.safeExecute(AbstractEventExecutor.java:164)
        at io.netty.util.concurrent.SingleThreadEventExecutor.runAllTasks(SingleThreadEventExecutor.java:472)
        at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:500)
        at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:989)
        at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
        at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
        at java.base/java.lang.Thread.run(Thread.java:834)
```