import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  DNSHealthIndicator,
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('Watchman')
@Controller('watchman')
export class watchmanController {
  private start: number;

  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {
    this.start = Date.now();
  }

  @Get('/')
  async get() {
    const now = Date.now();
    return {
      status: 'API Online',
      code: 200,
      uptime: Number((now - this.start) / 1000).toFixed(0),
    };
  }

  @Get('check')
  @HealthCheck()
  async dnsCheck() {
    return this.health.check([
      () => this.dns.pingCheck('hellomunnar', 'https://hellomunnar.in'),
      async () => this.db.pingCheck('database', { timeout: 300 }),
      async () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      async () => this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),
    ]);
  }
}
