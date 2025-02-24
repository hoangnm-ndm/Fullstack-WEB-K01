# Dislay: inline

## Thẻ inline

- Các thẻ inline phổ biến: img, b, i, a, span, strong, input, label, button, hầu hết các thẻ của form là inline.
- Nội dung thẻ bị đối xử như là text nên có khoảng trắng nếu xuống dòng ở giữa các thẻ.
- Xử lý:
  - C1: font-size: 0,
  - C2: display: flex
- Với thẻ inline: padding và margin chỉ hoạt động theo chiều ngang.
- Với thẻ inline: không thể trực tiếp thay đổi width, height của thẻ.

-> Giải pháp: chuyển thẻ inline thành thẻ block (inline-block).

## Thẻ block

- ??

## Thẻ inline-block

- ??

---

# Position

- Là thuộc tính can thiệp vào việc dịch chuyển vị trí của phần tử (có thể thay đổi bố cục dòng chảy tự nhiên của tài liệu)

## Position: static: value default

## Position: relative

- Phần tử vẫn chiếm không gian ban đầu, nhưng có thể thay đổi được vị trí dựa vào top, left, right, botttom.
- Nếu top và bottom cùng được thiết lập, top sẽ được ưu tiên hơn.
- Nếu left và right cùng được thiết lập, left sẽ được ưu tiên hơn.
