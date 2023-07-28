import { useState, Suspense, lazy, ComponentType } from "react";
import { JSX } from "react/jsx-runtime";
import Loader from "./Loader";
import MemoNotFoundPage1 from "./NotFoundPage1";

export function ErrorBoundary(props: { children: React.ReactNode }) {
  const [error, setError] = useState(null);

  if (error) {
    return (
      <div>
        <MemoNotFoundPage1 />
      </div>
    );
  }

  try {
    return props.children;
  } catch (err) {
    setError(err as null);
  }
}

const Loadable = (
  importFunction: () => Promise<{ default: ComponentType<unknown> }>
) => {
  const LazyComponent = lazy(importFunction);
  return (props: JSX.IntrinsicAttributes) => (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Loadable;
