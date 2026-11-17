
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Users() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 4;

  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  // تأخير البحث
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // تصفير الصفحة عند تغيير البحث
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  // البحث عن المستخدمين
  const filteredUsers = (users || []).filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // حساب صفحات المستخدمين
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  return (
    <div className="users-page">
      <h1>Users</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p>Loading users...</p>}

      {error && (
        <div>
          <p>Something went wrong!</p>
          <button onClick={refetch}>Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="users-container">
            {currentUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <p>No users found.</p>
          )}

          {filteredUsers.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Users;
