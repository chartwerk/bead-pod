
import * as types from './types';

import * as base from '@chartwerk/base';


export class ChartwerBeadPod extends base.ChartwerkBase<types.TimeSerie, types.Options> {
  _renderMetrics(): void {
    throw new Error("Method not implemented.");
  }
  onMouseOver(): void {
    throw new Error("Method not implemented.");
  }
  onMouseOut(): void {
    throw new Error("Method not implemented.");
  }
  onMouseMove(): void {
    throw new Error("Method not implemented.");
  }
  renderSharedCrosshair(timestamp: number): void {
    throw new Error("Method not implemented.");
  }
  hideSharedCrosshair(): void {
    throw new Error("Method not implemented.");
  }
}
