'use client';

import SelfCheckNotice from '@/components/self-check-notice';
import { selfCheckTabs } from '@/lib/literals';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

export default function SelfCheckDetail({ params }: { params: { id: string } }) {
  const [tab, setTab] = useState<SelfCheckTab['name']>('OSS');

  return (
    <>
      {/* Breadcrumb */}
      <h2 className="breadcrumb">
        Self-Check List
        <i className="mx-2 text-sm fa-solid fa-angle-right"></i>
        Project {params.id}
      </h2>

      {/* Description */}
      <h3 className="pb-8">Detailed information of a project with ID {params.id}.</h3>

      {/* Basic information */}
      <div className="w-[calc(100%-4px)] shadow-box">
        <div className="flex flex-col gap-x-8 gap-y-2 text-sm lg:flex-row">
          <div className="flex flex-col gap-y-2 flex-1">
            <div className="flex">
              <div className="flex-shrink-0 w-32 font-semibold">Project Name</div>
              <div className="flex-1 text-semiblack/80">FOSSLight Hub Lite</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-32 font-semibold">Project Version</div>
              <div className="flex-1 text-semiblack/80">1.0.0</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 flex-1">
            <div className="flex">
              <div className="flex-shrink-0 w-32 font-semibold">Create</div>
              <div className="flex-1 text-semiblack/80">2023-10-05 23:54</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-32 font-semibold">Comment</div>
              <div className="flex-1 text-semiblack/80">There are some comments here.</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-x-1 mt-2">
          <button className="px-2 py-0.5 crimson-btn">Delete</button>
          <button className="px-2 py-0.5 default-btn">Edit</button>
        </div>
      </div>

      {/* Tab selector */}
      <div className="flex justify-center items-center gap-x-2 mt-10 text-sm font-semibold">
        {selfCheckTabs.map((selfCheckTab, idx) => {
          return (
            <Fragment key={selfCheckTab.name}>
              <button
                className={clsx(
                  'px-3 py-2 border rounded transition-colors duration-300 no-tap-highlight',
                  tab === selfCheckTab.name
                    ? 'bg-charcoal border-charcoal text-semiwhite'
                    : 'border-darkgray text-darkgray'
                )}
                disabled={tab === selfCheckTab.name}
                onClick={() => setTab(selfCheckTab.name)}
              >
                {idx + 1}. {selfCheckTab.name}
              </button>
              {idx < 2 && <i className="fa-solid fa-right-long"></i>}
            </Fragment>
          );
        })}
      </div>

      {/* Tab description */}
      <div className="text-center mt-6 mb-8">
        {selfCheckTabs.map(
          (selfCheckTab) =>
            tab === selfCheckTab.name && (
              <Fragment key={selfCheckTab.name}>
                <div className="mb-2 text-lg font-semibold">{selfCheckTab.title}</div>
                <div className="px-4 text-sm text-semiblack/80 leading-relaxed">
                  {selfCheckTab.description}
                </div>
              </Fragment>
            )
        )}
      </div>

      {/* Actions */}
      {tab === 'Notice' && <SelfCheckNotice />}
    </>
  );
}
