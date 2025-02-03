import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string };
  }) {
    const currentPage = searchParams.page
      ? parseInt(searchParams.page) || 1
      : 1;

    return (
      <Pagination itemCount={100} pageSize={10} currentPage={currentPage} />
    );
  }
