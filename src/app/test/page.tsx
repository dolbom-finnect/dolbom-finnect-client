export default function TestPage() {
  return (
    <main className="p-6 space-y-8">
      <section>
        <h2 className="text-title1 font-semibold text-gray-900">Colors</h2>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-main-blue text-white rounded px-3 py-4">
            bg-main-blue
          </div>
          <div className="bg-main-orange text-white rounded px-3 py-4">
            bg-main-orange
          </div>
          <div className="bg-main-green text-white rounded px-3 py-4">
            bg-main-green
          </div>

          <div className="bg-sub-blue text-gray-900 rounded px-3 py-4">
            bg-sub-blue
          </div>
          <div className="bg-sub-orange text-gray-900 rounded px-3 py-4">
            bg-sub-orange
          </div>
          <div className="bg-sub-green text-gray-900 rounded px-3 py-4">
            bg-sub-green
          </div>

          <div className="bg-gray-50 text-gray-900 rounded px-3 py-4">
            bg-gray-50
          </div>
          <div className="bg-gray-100 text-gray-900 rounded px-3 py-4">
            bg-gray-100
          </div>
          <div className="bg-gray-200 text-gray-900 rounded px-3 py-4">
            bg-gray-200
          </div>
          <div className="bg-gray-300 text-white rounded px-3 py-4">
            bg-gray-300
          </div>
          <div className="bg-gray-400 text-white rounded px-3 py-4">
            bg-gray-400
          </div>
          <div className="bg-gray-500 text-white rounded px-3 py-4">
            bg-gray-500
          </div>
          <div className="bg-gray-600 text-white rounded px-3 py-4">
            bg-gray-600
          </div>
          <div className="bg-gray-700 text-white rounded px-3 py-4">
            bg-gray-700
          </div>
          <div className="bg-gray-800 text-white rounded px-3 py-4">
            bg-gray-800
          </div>
          <div className="bg-gray-900 text-white rounded px-3 py-4">
            bg-gray-900
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-title1 font-semibold text-gray-900">Typography</h2>
        <div className="mt-3 space-y-2">
          <p className="text-title1 font-semibold">text-title1 (24px)</p>
          <p className="text-title2 font-semibold">text-title2 (22px)</p>
          <p className="text-title3 font-bold">text-title3-bold (20px)</p>
          <p className="text-title3 font-semibold">text-title3-semibold</p>
          <p className="text-title3 font-medium">text-title3-medium</p>
          <p className="text-title3 font-regular">text-title3-regualr</p>
          <p className="text-title4 ">text-title4 (18px)</p>
          <p className="text-title5">text-title5 (16px)</p>
          <p className="text-body1">text-body1 (16px)</p>
          <p className="text-body2 text-gray-500">text-body2 (14px)</p>
          <p className="text-body3 text-gray-500">text-body3 (13px)</p>
          <p className="text-body4 text-gray-500">text-body4 (12px)</p>
          <p className="font-serif text-title1">
            font-serif (KoPub Batang Pro)
          </p>
        </div>
      </section>

      <section className="space-x-3">
        <button className="px-4 py-2 rounded bg-main-blue text-white hover:bg-main-green">
          Primary
        </button>
        <button className="px-4 py-2 rounded bg-sub-blue text-gray-900 hover:bg-sub-green">
          Subtle
        </button>
        <button className="px-4 py-2 rounded border border-gray-300 text-gray-900 hover:bg-gray-50">
          Outline
        </button>
      </section>
    </main>
  );
}
