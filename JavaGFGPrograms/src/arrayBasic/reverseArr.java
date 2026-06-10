package arrayBasic;

public class reverseArr {
	public static int[] reverse(int[] arr) {
		int low = 0;
		int high = arr.length - 1;
		
		while(low < high) {
			int temp = arr[low];
			arr[low] = arr[high];
			arr[high] = temp;
			low++;
			high--;
		}
		return arr;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = {1, 2, 3, 4, 5};
		
		int[] res = reverse(arr);
		
		for(int i = 0; i < res.length; i++) {
			System.out.print(res[i] + " ");
		}
	}

}
