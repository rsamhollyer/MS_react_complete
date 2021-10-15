// our-domain.com/news/:newsId - dynamic routing is written like [].jsx with an identifier of some-sort in the brackets

import { useRouter } from 'next/router';
import React from 'react';

export default function DetailPage() {
  const router = useRouter();
  const { newsId } = router.query;
  /**
   * If we had server and database, we can use this id to fetch what we need to display
   */
  return <h1>A nested page</h1>;
}
