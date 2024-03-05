"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCenterPlugin = void 0;
var textCenterPlugin = function (options) {
    return {
        id: 'textCenter',
        beforeDatasetsDraw: function (chart) {
            var _a, _b;
            var ctx = chart.ctx, data = chart.data;
            ctx.save();
            ctx.fillStyle = options.color || '#fff';
            ctx.textAlign = options.textAlign || 'center';
            ctx.textBaseline = options.textBaseline || 'middle';
            var textX = chart.getDatasetMeta(0).data[0].x;
            var textY = chart.getDatasetMeta(0).data[0].y;
            var lineHeight = options.lineHeight || 24;
            if (options.head && ((_a = options.fontStyle) === null || _a === void 0 ? void 0 : _a.head)) {
                ctx.font = options.fontStyle.head;
                var headY = options.body ? textY - lineHeight / 2 : textY;
                ctx.fillText(options.head, textX, headY);
            }
            if (options.body && ((_b = options.fontStyle) === null || _b === void 0 ? void 0 : _b.body)) {
                ctx.font = options.fontStyle.body;
                var bodyY = options.head ? textY + lineHeight / 2 : textY;
                ctx.fillText(options.body, textX, bodyY);
            }
        }
    };
};
exports.textCenterPlugin = textCenterPlugin;
