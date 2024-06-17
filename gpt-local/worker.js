import { WebWorkerMLCEngineHandler } from "https://esm.run/@mlc-ai/web-llm"

const engine = new MLCEngine()
const handler = new WebWorkerMLCEngineHandler(engine)

onemessage = msg => {
    handler.onemessage(msg)
}