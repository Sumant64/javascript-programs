package arrayBasic;

public class MoveZerosEnd {
	
	public static int[] moveZerosEnd(int[] arr) {
		int count = 0;
		for(int i = 0; i < arr.length; i++) {
			if(arr[i] != 0) {
				int temp = arr[i];
				arr[i] = arr[count];
				arr[count] = temp;
				count++;
			}
		}
		
		return arr;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = {0, 2, 3, 0, 1, 0, 0, 5};
		int[] res = moveZerosEnd(arr);
		
		for(int i = 0; i < arr.length; i++) {
			System.out.print(res[i] + " ");
		}
	}

}
