// wagyu-stall-new/src/components/Section/StoreSection.tsx
import { MapPin, Clock, Phone, Train } from "lucide-react";

export default function StoreInfo() {
  return (
    <section className="w-full bg-gradient-to-br from-yellow-50 to-white py-16 px-2">
      <div className="max-w-7xl mx-auto rounded-2xl shadow-lg bg-white/90 backdrop-blur-md p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          店舗情報
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-10">
          <div className="space-y-8 text-lg md:text-xl">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="font-bold text-gray-700">住所</div>
                <div className="tracking-wide text-gray-900">
                  東京都渋谷区宇田川町1-2-3
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="font-bold text-gray-700">営業時間</div>
                <div className="tracking-wide text-gray-900">
                  11:00〜20:00（年中無休）
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="font-bold text-gray-700">電話番号</div>
                <div className="tracking-wide text-gray-900">03-1234-5678</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Train className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="font-bold text-gray-700">アクセス</div>
                <div className="tracking-wide text-gray-900">
                  渋谷駅ハチ公口から徒歩5分
                </div>
              </div>
            </div>
          </div>
          {/* マップ枠ダミー */}
          <div className="rounded-xl overflow-hidden h-100 w-full border-2 border-yellow-100 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-lg">
              ここにGoogleマップが入ります
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
