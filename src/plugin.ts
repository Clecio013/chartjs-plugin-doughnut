import { Chart } from 'chart.js';

export type TextCenterPluginOptions = {
  head?: string;
  body?: string;
  fontStyle?: {
    head?: string;
    body?: string;
  };
  color?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  lineHeight?: number;
};

export const textCenterPlugin = (options: TextCenterPluginOptions) => {
  return {
    id: 'textCenter',
    beforeDatasetsDraw(chart: Chart<'doughnut'>) {
      const { ctx, data } = chart
  
      ctx.save();
      ctx.fillStyle = options.color || '#fff';
      ctx.textAlign = options.textAlign || 'center';
      ctx.textBaseline = options.textBaseline || 'middle';
  
      const textX = chart.getDatasetMeta(0).data[0].x;
      const textY = chart.getDatasetMeta(0).data[0].y;
  
      const lineHeight = options.lineHeight || 24;
  
      if (options.head && options.fontStyle?.head) {
        ctx.font = options.fontStyle.head;
        const headY = options.body ? textY - lineHeight / 2 : textY;
        ctx.fillText(options.head, textX, headY);
      }
  
      if (options.body && options.fontStyle?.body) {
        ctx.font = options.fontStyle.body;
        const bodyY = options.head ? textY + lineHeight / 2 : textY;
        ctx.fillText(options.body, textX, bodyY);
      }
    }
  }
}
