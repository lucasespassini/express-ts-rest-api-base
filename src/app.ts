import express from 'express'
import cors from 'cors'
import router from './app/routes'

export class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
  }

  private middleware() {
    this.server.use(express.urlencoded({ extended: false }))
    this.server.use(express.json())
    this.server.use(cors())
  }

  private router() {
    this.server.use(router)
  }
}
