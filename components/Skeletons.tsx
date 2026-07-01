const SkeletonCard = () => (
  <div className="flex animate-pulse cursor-pointer flex-col gap-6 rounded-[18px] bg-white dark:bg-dark-200/50 p-5 shadow-sm">
    <div className="flex justify-between">
      <div className="size-20 min-w-20 rounded-full bg-light-300 dark:bg-dark-100/50" />
      <div className="flex flex-col items-end justify-between">
        <div className="h-6 w-6 rounded bg-light-300 dark:bg-dark-100/50" />
        <div className="h-4 w-16 rounded bg-light-300 dark:bg-dark-100/50" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="h-4 w-3/4 rounded bg-light-300 dark:bg-dark-100/50" />
      <div className="h-3 w-1/2 rounded bg-light-300 dark:bg-dark-100/50" />
      <div className="h-3 w-1/3 rounded bg-light-300 dark:bg-dark-100/50" />
    </div>
  </div>
);

const SkeletonRecentFile = () => (
  <div className="flex animate-pulse items-center gap-3">
    <div className="size-[50px] min-w-[50px] rounded-full bg-light-300 dark:bg-dark-100/50" />
    <div className="flex w-full justify-between items-center">
      <div className="flex flex-col gap-1">
        <div className="h-4 w-40 rounded bg-light-300 dark:bg-dark-100/50" />
        <div className="h-3 w-24 rounded bg-light-300 dark:bg-dark-100/50" />
      </div>
      <div className="h-6 w-6 rounded bg-light-300 dark:bg-dark-100/50" />
    </div>
  </div>
);

const SkeletonChart = () => (
  <div className="flex animate-pulse items-center rounded-[20px] bg-brand/20 dark:bg-brand/10 p-2 md:flex-col xl:flex-row">
    <div className="mx-auto aspect-square w-[180px] xl:w-[200px] rounded-full bg-brand/30" />
    <div className="flex-1 px-3 py-4 sm:px-5 lg:p-3 xl:pr-5 space-y-3">
      <div className="h-6 w-3/4 rounded bg-brand/30" />
      <div className="h-4 w-1/2 rounded bg-brand/30" />
    </div>
  </div>
);

const SkeletonSummaryCard = () => (
  <div className="relative mt-6 animate-pulse rounded-[20px] bg-white dark:bg-dark-200/50 p-5">
    <div className="space-y-4">
      <div className="flex justify-between gap-3">
        <div className="h-16 w-[120px] rounded bg-light-300 dark:bg-dark-100/50" />
        <div className="h-5 w-16 rounded bg-light-300 dark:bg-dark-100/50" />
      </div>
      <div className="mx-auto h-5 w-24 rounded bg-light-300 dark:bg-dark-100/50" />
      <div className="h-px w-full bg-light-300 dark:bg-dark-100/50" />
      <div className="mx-auto h-3 w-32 rounded bg-light-300 dark:bg-dark-100/50" />
    </div>
  </div>
);

export const DashboardSkeleton = () => (
  <div className="dashboard-container">
    <section>
      <SkeletonChart />
      <ul className="dashboard-summary-list">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonSummaryCard key={i} />
        ))}
      </ul>
    </section>
    <section className="dashboard-recent-files">
      <div className="h-7 w-48 rounded bg-light-300 dark:bg-dark-100/50 animate-pulse" />
      <ul className="mt-5 flex flex-col gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonRecentFile key={i} />
        ))}
      </ul>
    </section>
  </div>
);

export const FileListSkeleton = () => (
  <div className="page-container">
    <section className="w-full">
      <div className="h-10 w-40 rounded bg-light-300 dark:bg-dark-100/50 animate-pulse" />
      <div className="total-size-section">
        <div className="h-5 w-32 rounded bg-light-300 dark:bg-dark-100/50 animate-pulse" />
        <div className="sort-container">
          <div className="h-11 w-[210px] rounded-lg bg-light-300 dark:bg-dark-100/50 animate-pulse" />
        </div>
      </div>
    </section>
    <section className="file-list">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </section>
  </div>
);

export { SkeletonCard, SkeletonRecentFile, SkeletonChart, SkeletonSummaryCard };
